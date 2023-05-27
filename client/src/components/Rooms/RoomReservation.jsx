import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation = () => {
   return (
      <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
         <div className="flex flex-row items-center gap-1 p-4">
            <div className="text-2xl font-semibold">$200</div>
            <div className="font-light text-neutral-600">Night</div>
         </div>
         <hr />

         <Calender />
         <hr />
         <div className="p-4 text-[17px]">
            <Button label='Reserve' />
         </div>
         <hr />

         <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
            <div>Total</div>
            <div>$400</div>
         </div>
      </div>
   );
};

export default RoomReservation;