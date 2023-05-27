import Heading from "../Heading/Heading";

const Header = () => {
   return (
      <div>
         <Heading
            title='Veluvana Bali - Owl Bamboo House'
            subtitle='Sidemen Indonesia'
         />

         <div className="w-full md:h-[70vh] overflow-hidden rounded-xl mt-5">
            <img className="object-cover w-full h-full" src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" alt="Header Image" />
         </div>
      </div>
   );
};

export default Header;