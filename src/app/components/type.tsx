"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';
const Type = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Web Designer', 'UI/UX Designer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default Type