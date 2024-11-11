import React from 'react'

export const Hero = () => {
    return (
        <main>
            <div className="container">
                <div>
                    <h1>Contacts us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magnam obcaecati quae, aperiam magni, autem atque quo officia corrupti unde facilis dolorum distinctio minus odio, repellat dolorem. Aspernatur quisquam quia eveniet modi omnis tempore? Quibusdam, dolorum pariatur. Quos minima doloremque dolorem magni labore fuga.</p>
                </div>
                <div className="form-container">
                    <div className="form-wrapper">
                        <img src="chat.svg" alt="" />
                        <form>
                            <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' />
                            </div>
                            <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email'/>
                            </div>
                            <div>
                            <label htmlFor="text-area">Text</label>
                            <textarea id="text-area"></textarea>
                            </div>
                            <button className='submit-btn'>Submit</button>
                        </form>
                    </div>
                    <div className="image">
                        <img src="image.svg" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}
