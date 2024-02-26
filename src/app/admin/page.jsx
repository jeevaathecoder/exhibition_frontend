import App from "@/component/adminhero/herotable/App";
import AdminSidebar from "@/component/sidebar/adminsidebar";

const AdminPage = () => {
    return (
      <div>
        <AdminSidebar />

        <div class="p-4 sm:ml-64">
          <App />
        </div>


      </div>
    );
  }
  
  export default AdminPage;