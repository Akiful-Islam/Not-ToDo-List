import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
type Props = {
  form: UseFormReturn<{
    title: string;
    priority: string;
    dueDate: Date;
    description?: string | undefined;
  }>;
};
const TodoTitle = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <div className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="title" className="text-right">
              Title
            </FormLabel>
            <FormControl>
              <Input id="title" className="col-span-3" {...field} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TodoTitle;
