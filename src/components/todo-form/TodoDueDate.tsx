import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/ui/custom/date-picker";
import { UseFormReturn } from "react-hook-form";
type Props = {
  form: UseFormReturn<{
    title: string;
    priority: string;
    dueDate: Date;
    description?: string | undefined;
  }>;
};
const TodoDueDate = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="dueDate"
      render={({ field }) => (
        <FormItem>
          <div className="grid grid-cols-4 items-center gap-4">
            <FormLabel className="text-right">Due Within</FormLabel>
            <FormControl>
              <DatePicker field={field} />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TodoDueDate;
