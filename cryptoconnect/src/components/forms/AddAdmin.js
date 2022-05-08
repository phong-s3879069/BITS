import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addAdmin } from '../../redux_BITS/actions/user';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function AddAdmin() {

    const dispatch = useDispatch()
    const returnMessage = useSelector((state) => state.profile?.message);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .required('Name is required')
            .max(50, 'Name must not exceed 50 characters')
            .matches(
                /^(?![ ]+$)[a-zA-Z .]*$/,
                'Name must only contain letters and space'
            ),
        username: Yup.string()
            .trim()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(15, 'Username must not exceed 15 characters')
            .matches(
                /^[a-zA-Z0-9_]+$/,
                'Username must only contain letters, numbers, or "_"'
            ),
        email: Yup.string()
            .trim()
            .required('Email is required')
            .email('Email is invalid'),
    });
    const addadmin = (data) => {
        let registrant = {
            username: data.username,
            email: data.email,
            name: data.name,
        };
        dispatch(addAdmin(registrant));
    }
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <div>
            <div className='container' style={{ marginTop: "56px"}}>
                <div class="row">
                    <div className='col-lg'></div>
                    <div className='col-lg col-md-12'>
                        {/* {returnMessage !==
                    'Verification email has been sent to you. Please verify your email to continue!' ? ( */}
                        <form onSubmit={handleSubmit(addadmin)}>
                            <h1 className='h3 mb-3 fw-normal text-center text-white'>
                                REGISTER NEW ADMIN
                            </h1>

                            <div class="mb-3">
                                <input type="name" name="Name" className={`form-control ${errors.name ? 'is-invalid' : ''}`} id="Name" placeholder="Name" {...register('name')}></input>
                                <div className='invalid-feedback'>
                                    {errors.name?.message}
                                </div>
                            </div>
                            <div class="mb-3">
                                <input type="username" name="Username" className={`form-control ${errors.username || returnMessage ===
                                    'Username is already existed.' ? 'is-invalid' : ''
                                    }`} id="Username" placeholder="Username" {...register('username')}></input>
                                <div className='invalid-feedback'>
                                    {returnMessage ===
                                        'Username is already existed.' &&
                                        returnMessage}{' '}
                                    {errors.username?.message}
                                </div>

                            </div>
                            <div class="mb-3">
                                <input type="email" name="EmailAddress" className={`form-control ${errors.email ||
                                    returnMessage ===
                                    'Email is already existed.'
                                    ? 'is-invalid'
                                    : ''
                                    }`} id="EmailAddress"
                                    placeholder="Email" {...register('email')}></input>
                                <div className='invalid-feedback'>
                                    {returnMessage ===
                                        'Email is already existed.' &&
                                        returnMessage}{' '}
                                    {errors.email?.message}
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button className='mx-auto btn btn-lg btn-primary mt-3' type='submit'>REGISTER</button>
                            </div>

                        </form>
                    </div>
                    <div className='col-lg'></div>
                </div>
            </div>
        </div>
    )
}