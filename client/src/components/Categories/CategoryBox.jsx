import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string'

const CategoryBox = ({ label, icon: Icon }) => {
   const [params, setParams] = useSearchParams();
   const navigate = useNavigate();

   const handleClick = () => {
      let currentQuery = {}
      if (params) {
         currentQuery = queryString.parse(params.toString());
      }
      const updatedQuery = {
         ...currentQuery,
         category: label,
      }

      const url = queryString.stringifyUrl(
         {
            url: '/',
            query: updatedQuery
         },
         { skipNull: true }
      )
      navigate(url)
   }


   return (
      <div onClick={handleClick} className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 text-neutral-500 hover:text-neutral-800 border-transparent cursor-pointer">
         <Icon size={26} />
         <div className="text-sm font-medium">{label}</div>
      </div>
   );
};

export default CategoryBox;