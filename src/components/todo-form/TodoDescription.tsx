import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<{
    title: string;
    priority: string;
    dueDate: Date;
    description?: string | undefined;
  }>;
};

const TodoDescription = ({ form }: Props) => {
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <div className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="description" className="text-right">
              Description
            </FormLabel>
            <FormControl>
              <Textarea
                id="description"
                className="col-span-3"
                placeholder="Describe what not to do..."
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

export default TodoDescription;
