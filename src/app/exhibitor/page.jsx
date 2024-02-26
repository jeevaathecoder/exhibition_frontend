import Exhibitorhero from "@/component/exhibitorhero/exhibitorhero";
import Stallregister from "@/component/newExhibitor/stallregister";

const UserPage = () => {

    const userstate = "existing"

    if(userstate === "new"){
      return (
        <div className="flex justify-center items-center p-5 w-full" >
          <Stallregister />
        </div>
      );
    }

    return (
      <div className="flex justify-center items-center p-5 w-full" >
        <Exhibitorhero />
      </div>
    );
  
  
  
  }
  
  export default UserPage;