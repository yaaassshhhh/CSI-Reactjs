import React from 'react'

export const Card = (props) => {
    //instead of taking props we can destructure and obatin the values directly
    //for instanc :- export const Card = ({creatorName}) => {}
    const userName = props.creatorName;
    return (
        <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20175138/pexels-photo-20175138/free-photo-of-a-woman-sitting-on-the-ground-with-her-phone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg fon">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption>
                    <div>
                        {userName || 'Name didnt supplied'}
                    </div>
                    <div>
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure></div>
    )
}
