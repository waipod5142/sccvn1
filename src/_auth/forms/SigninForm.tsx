import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/authHelpers';

const SigninValidation = z.object({
  passcode: z.string().min(6, 'Wrong Passcode'),
});

const SigninForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuthenticated } = useUserContext();

  // Get the original intended path from location state or default to "/Dashboard"
  const from = location.state?.from;

  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: { passcode: '' },
  });

  const handleSignin = (data: { passcode: string }) => {
    if (data.passcode === '123456') {
      setIsAuthenticated(true);
      navigate(from); // Navigate to the original path or default
    } else {
      alert('Invalid passcode. Please try again.');
    }
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <h2 className="h3-bold pt-5">Enter Passcode</h2>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="passcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Passcode</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            Log in
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default SigninForm;
