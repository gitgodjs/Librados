import { Star } from 'lucide-react';

export const CardPres = ({ bgImage, name, imageUser, text, position }) => {
    const postStyle = {
        bottom: position.bottom || '10%', 
        right: position.right || '-50%'
    };

    return (
        <div className="relative bg-no-repeat bg-cover rounded-lg w-56 h-64" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute bg-[#ffffff] shadow-lg shadow-current w-fit h-fit rounded-md p-2" style={postStyle}>
                <div className='flex items-center align-center justify-between'>
                    <div className={`relative bg-no-repeat bg-center rounded-full bg-cover w-9 h-9`} style={{ backgroundImage: `url(${imageUser})` }}></div>
                    
                    <h2 className='m-1 font-bold'>@{name}</h2>
                    
                    <div className='flex p-2 gap-1 text-orange-300'>
                        <Star className='w-4' fill="orange"/>
                        <Star className='w-4' fill="orange"/>
                        <Star className='w-4' fill="orange"/>
                        <Star className='w-4' fill="orange"/>
                        <Star className='w-4' fill="orange"/>  
                    </div>
                </div>
                <div className="max-w-56 p-2"> 
                    <p className='text-base'>{text}</p>
                </div>
            </div>
        </div>
    );
};
