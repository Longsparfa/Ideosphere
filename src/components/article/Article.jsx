import React from 'react';
import { Link } from 'react-router-dom';


const Article = ({ title, content, id }) => {
    return (
        <>
        
                  <div className="z-[1] h-0.5 w-full origin-[50%_0%] bg-black" />
                    <div className="space-y-8 pt-2">
                        <div className="space-y-4">
                            <Link to={id}>
                                <h2 className="text-2xl font-black uppercase tracking-wide lg:w-4/5 lg:text-3xl">{title}</h2>
                            </Link>
                            <p className='mt-2'>{content}</p>
                        </div>
                        <div>
                        <Link className="text-xs font-medium uppercase md:text-sm" to={id}>Read more</Link>
                        </div>
                    </div>

        </>
    );
}

export default Article;
