import { useToast } from "@/components/ui/use-toast";

const AllUsers = () => {
  const { toast } = useToast();

  return (
    <div className="common-container">
      <div className="user-container">
        <h2 className="h3-bold md:h2-bold text-left w-full">All Users</h2>
      </div>
    </div>
  );
};

export default AllUsers;
