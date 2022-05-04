import weblogo from '../../assets/weblogo.jpg';
export default function AddAdmin(){
    return(
        <div>
            <div className='container' style={{ marginTop: "110px", marginBottom: 80 }}>
            <div className='row'>
                <div className='col-lg'></div>
                <div className='col-lg col-md-12'>
                    {/* {returnMessage !==
                    'Verification email has been sent to you. Please verify your email to continue!' ? ( */}
                        <form>
                            <div style={{ marginLeft: '35%' }}>
                                <img
                                    className='mb-4 mx-auto'
                                    src={weblogo}
                                    alt='Web Logo'
                                    width='45%'
                                    height='45%'
                                />
                            </div>
                            <h1 className='h3 mb-3 fw-normal text-center'>
                                REGISTER NEW ADMIN
                            </h1>

                            <div className='form-floating'>
                                <input
                                    type='username'
                                    className="form-control"
                                    id='floatingInput-name'
                                    placeholder='Enter new admin name'
                                />
                                <label for='floatingInput-name'>Name</label>
                                {/* <div className='invalid-feedback'>
                                    {errors.name?.message}
                                </div> */}
                            </div>
                            <div className='form-floating mt-2'>
                                <input
                                    type='username'
                                    className="form-control"
                                    id='floatingInput-username'
                                    placeholder='Enter new admin username'
                                />
                                <label for='floatingInput-username'>
                                    Username
                                </label>
                                {/* <div className='invalid-feedback'>
                                    {returnMessage ===
                                        'Username is already existed.' &&
                                        returnMessage}{' '}
                                    {errors.username?.message}
                                </div> */}
                            </div>
                            <div className='form-floating mt-2'>
                                <input
                                    type='email'
                                    className="form-control"
                                    id='floatingInput-email'
                                    placeholder='name@example.com'
                                />
                                <label for='floatingInput-email'>Email</label>
                                {/* <div className='invalid-feedback'>
                                    {returnMessage ===
                                        'Email is already existed.' &&
                                        returnMessage}{' '}
                                    {errors.email?.message}
                                </div> */}
                            </div>
                            <button className='w-100 btn btn-lg btn-primary mt-3' type='submit'>REGISTER</button>
                        </form>
                    {/* // ) : (
                    //     <div>
                    //         <div>
                    //             <img
                    //                 className='mb-4 mx-auto'
                    //                 src={emailsent}
                    //                 alt='Verification email sent'
                    //                 width='100%'
                    //                 height='100%'
                    //             />
                    //         </div>

                    //         <div class="alert alert-success" role="alert">
                    //             {returnMessage}. If you don't see your email in <strong>Inbox</strong> folder. Please check the <strong>Promotions</strong> folder.
                    //         </div></div>
                    //     )

                    //} */}
                </div>
                <div className='col-lg'></div>
            </div>
        </div>
        </div>
    )
}