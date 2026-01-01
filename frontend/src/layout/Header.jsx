import React from 'react';

const Header = () => {
    return (
        <>
            <div className="absolute top-0 h-[650px] p-0 m-0 w-[1523px] bg-green-700 mb-12">
            <div className="bg-red-400 flex flex-row h-full w-full">
                <div className="bg-amber-300 h-full left-0 relative w-1/3">
                    <div className="bg-orange-500 h-[390px] w-[450px] absolute left-[120px] bottom-0">OO</div>
                </div>
                <div className="bg-amber-500 h-full relative right-0 w-2/3">
                    <div className="bg-green-500 absolute left-80 h-full w-[695px] ">
                        <div className="bg-amber-900 h-78 w-[780px] right-12 absolute">1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
}

export default Header;
