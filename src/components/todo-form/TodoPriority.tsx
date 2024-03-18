import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PrioritySelect } from "@/components/PrioritySelect";
import { UseFormReturn } from "react-hook-form";
type Props = {
  form: UseFormReturn<{
    title: string;
    priority: string;
    dueDate: Date;
    description?: string | undefined;
  }>;
};
const TodoPriority = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="priority"
      render={({ field }) => (
        <FormItem>
          <div className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="priority" className="text-right">
              Priority
            </FormLabel>
            <FormControl>
              <PrioritySelect
                placeholder="Select"
                selectLabel="Priority"
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TodoPriority;
