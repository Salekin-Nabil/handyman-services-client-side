import React from 'react';
import general from '../../assets/images/services_image/general.jpg';
import home from '../../assets/images/services_image/home.jpg';
import paint from '../../assets/images/services_image/paint.jpg';
import plumbing from '../../assets/images/services_image/plumbing.jpg';
import electrical from '../../assets/images/services_image/electrical.jpg';
import walls from '../../assets/images/services_image/walls.jpg';
import appliance from '../../assets/images/services_image/appliance.jpg';
import door from '../../assets/images/services_image/door.jpg';
import yard from '../../assets/images/services_image/yard.jpg';
import fence from '../../assets/images/services_image/fence.jpg';
import trash from '../../assets/images/services_image/trash.jpg';
import washing from '../../assets/images/services_image/washing.jpg';
import Service from './Service';
import { pl } from 'date-fns/locale';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'General Repair',
            description: 'Replacing damaged boards, securing loose rails, and other minor repairs.',
            img: general
        },
        {
            _id: 2,
            name: 'Home Improvements',
            description: 'Checking the functionality of various home systems and performing preventative maintenance.',
            img: home
        },
        {
            _id: 3,
            name: 'Painting',
            description: 'Painting walls, ceilings, trim, and doors.',
            img: paint
        },
        {
            _id: 4,
            name: 'Plumbing',
            description: 'Fixing leaky faucets, unclogging drains, and replacing fixtures.',
            img: plumbing
        },
        {
            _id: 5,
            name: 'Electrical',
            description: 'Installing or repairing outlets, switches, and other minor electrical components.',
            img: electrical
        },
        {
            _id: 6,
            name: 'Drywall Repair',
            description: ' Fixing holes, cracks, or other damages in walls and ceilings.',
            img: walls
        },
        {
            _id: 7,
            name: 'Appliance Installation',
            description: 'Installing appliances like dishwashers, washing machines, and dryers.',
            img: appliance
        },
        {
            _id: 8,
            name: 'Door and Windows Repairs',
            description: 'Adjusting, installing, or repairing interior and exterior doors. Repairing or replacing damaged windows and screens.',
            img: door
        },
        {
            _id: 9,
            name: 'Landscaping and Yard Work',
            description: 'Basic landscaping, lawn mowing, and yard cleanup. Cleaning out debris and repairing damaged sections of gutters.',
            img: yard
        },
        {
            _id: 10,
            name: 'Fence Installation and Repair',
            description: 'Mending or installing fences. Repairing or replacing damaged sections of flooring.',
            img: fence
        },
        {
            _id: 11,
            name: 'Trash Removal',
            description: 'Removing any kind of trash from the house.',
            img: trash
        },
        {
            _id: 12,
            name: 'Pressure Washing',
            description: 'Cleaning exterior surfaces, decks, driveways, and sidewalks.',
            img: washing
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;