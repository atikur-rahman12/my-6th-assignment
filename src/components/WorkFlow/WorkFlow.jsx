import React from 'react';

const WorkFlow = () => {
    return (
        <div className="mt-30 bg-linear-to-r from-indigo-600 to-purple-500 text-center space-y-5 p-12">
            <h1 className=" text-4xl md:text-5xl font-bold">Ready to Transform Your Workflow?</h1>
            <p className="text-white">Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <button className="btn bg-white text-purple-800 rounded-full mr-2">Explore Products</button>
            <button className="btn btn-outline rounded-full">View Pricing</button>
            <br />
            <span className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</span>
        </div>
    );
};

export default WorkFlow;