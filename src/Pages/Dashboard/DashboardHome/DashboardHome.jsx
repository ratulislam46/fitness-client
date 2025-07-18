import React from 'react';
import four from '../../../../public/image/four.png'
import one from '../../../../public/image/one.jpg'
import two from '../../../../public/image/two.jpg'
import three from '../../../../public/image/three.jpg'
import workOut from '../../../../public/image/workout.jpg'
import five from '../../../../public/image/five.jpg'
import six from '../../../../public/image/six.png'
import seven from '../../../../public/image/seven.png'
import eight from '../../../../public/image/eight.jpg'
import nine from '../../../../public/image/nine.jpeg'

const DashboardHome = () => {
    return (
        <section className="py-6 dark:bg-gray-100 object-cover dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src={five} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square object-cover" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={six} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={seven} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={nine} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={eight} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={one} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={two} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={three}/>
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square object-cover" src={four} />
                <img src={workOut} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square object-cover" />
            </div>
        </section>
    );
};

export default DashboardHome;