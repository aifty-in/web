import db from '@/prisma/db';
import { executeAction } from '@/lib/executeAction';
import { UserSchema } from './schema';

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get('email');
      const password = formData.get('password');
      const validatedData = UserSchema.parse({ email, password });
      await db.user.create({
        data: {
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
        },
      });
    },
    successMessage: 'Signed up successfully',
  });
};

export { signUp };
