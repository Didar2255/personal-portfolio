import React from 'react'
import './Blog.css'

function Blog() {
    const imgUrl = [
        '../../../../imgaes/Blog/cloud.png',
        '../../../../imgaes/Blog/computer.png',
        '../../../../imgaes/Blog/girl.png',
        '../../../../imgaes/Blog/man.png',
        '../../../../imgaes/Blog/river.png',
        '../../../../imgaes/Blog/tea.png',
    ]
    return (
        <div>
            <h1 className='text-center blog-title'>Blog</h1>
            <div className='blog-section'>

                <div className="grid grid-cols-2 gap-4 rounded-md py-10 md:py-20 m-0 card-section">
                    {
                        imgUrl.map((src, index) => (
                            <div key={index} className='mb-2 break-inside-avoid'>
                                <img src={src} alt="" className='w-25 object-cover' />
                                <div className='card-description p-5'>
                                    <h4 className='text-slate-300'>Photography | 28 April 2022</h4>
                                    <h2 className=' font-bold'>The artist vocation is to send light into the human heart</h2>
                                    <p className='text-sm mt-1 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident earum necessitatibus consequuntur cupiditate. Tenetur, assumenda iusto? Quae rem, maxime esse deserunt laboriosam mollitia. Sint temporibus dolores doloremque maiores rerum commodi.</p>
                                    <h6>Posted By Dery | Smait</h6>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog