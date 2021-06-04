import React, { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar({ scrolled }) {

    const [p, setp] = useState('pt-5')
    useEffect(() => {
        if (scrolled === 0) {
            setp('py-5 animatein')
        } else {
            setp('animateout')
        }
    }, [scrolled])

    return (
        <div>
            <div className={`py-4 ${p}`} style={{ position: 'fixed', margin: 0, padding: 0, width: '100%', zIndex: 100 }}>
                <div className="container" >
                    <div className="button_sayhello">
                        <center><span className="nav_opacity p-5 d-lg-inline d-none ">Github Repository Fetcher</span></center>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            
                            {/* <div className={menu ? 'd-inline' : "d-none"} className=" ml-md-4 ml-1 d-flex align-items-center" onClick={x => setMenu(e => !e)}><span className="nav_opacity mr-1 " style={{ color: 'rgb(96, 99, 123)' }}>Menu</span>
                                <svg className={!menu ? 'd-inline' : "d-none"} width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g stroke="#D8DBF3" stroke-width="3.2" fill="none" fill-rule="evenodd"><path d="M10.256 1.6c-3.01 0-4.19.228-5.409.88A5.67 5.67 0 0 0 2.48 4.846C1.828 6.065 1.6 7.246 1.6 10.256v5.488c0 3.01.228 4.19.88 5.409a5.67 5.67 0 0 0 2.367 2.368c1.218.651 2.399.879 5.409.879h5.488c3.01 0 4.19-.228 5.409-.88a5.67 5.67 0 0 0 2.368-2.367c.651-1.218.879-2.399.879-5.409v-5.488c0-3.01-.228-4.19-.88-5.409a5.67 5.67 0 0 0-2.367-2.368c-1.218-.651-2.399-.879-5.409-.879h-5.488z"></path><path d="M6.5 9.75h7.313"></path><path d="M6.5 15.438h13.813"></path></g></svg>
                                <svg className={menu ? 'd-inline' : "d-none"} width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g stroke="#D8DBF3" stroke-width="3.2" fill="none" fill-rule="evenodd"><path d="M10.256 1.6c-3.01 0-4.19.228-5.409.88A5.67 5.67 0 0 0 2.48 4.846C1.828 6.065 1.6 7.246 1.6 10.256v5.488c0 3.01.228 4.19.88 5.409a5.67 5.67 0 0 0 2.367 2.368c1.218.651 2.399.879 5.409.879h5.488c3.01 0 4.19-.228 5.409-.88a5.67 5.67 0 0 0 2.368-2.367c.651-1.218.879-2.399.879-5.409v-5.488c0-3.01-.228-4.19-.88-5.409a5.67 5.67 0 0 0-2.367-2.368c-1.218-.651-2.399-.879-5.409-.879h-5.488z"></path><path d="M17.894 7.994l-9.767 9.767"></path><path d="M7.68 8.18l9.767 9.767"></path></g></svg>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
                {/* <div className={menu ? 'd-inline' : "d-none"} style={{ width: '100vw', height: '80vh', backgroundColor: '#19191C', position: 'fixed', marginTop: '20px', position: 'absolute', zIndex: 5, transition:'all 0.4s ease-in-out' }}>
                    <Menu />
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
