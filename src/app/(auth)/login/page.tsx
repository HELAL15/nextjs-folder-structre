'use client';

import { useRouter } from 'next/navigation';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { Form } from '@/components/ui/form';
import useCookie from '@/hooks/useCookies';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';
import type { FieldValues } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

const formObject: FieldValues = {
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
        email: '',
        password: ''
    }
};

const Page = () => {
    const form = useForm(formObject);

    const { control, formState, handleSubmit } = form;

    const router = useRouter();
    const [setCookie] = useCookie('token', '');

    const onSubmit = async (data: FieldValues) => {
        try {
            const res = await axios.post('https://api.jaar.cloud/api/v1/admin/login', {
                email: data.email,
                password: data.password
            });
            const token = res?.data?.data?.access_token;

            // Ensure token exists before setting cookie
            if (token && typeof setCookie === 'function') {
                setCookie(token, {
                    path: '/',
                    secure: false,
                    sameSite: 'strict'
                });
            }

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className='my-12 lg:my-20'>
            <div className='container grid h-full place-items-center space-y-8'>
                <h1 className='text-center text-3xl font-bold'>login</h1>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-6 md:w-[400px]'>
                        <FormInput name='email' placeholder='a**@gmail.com' label='email' control={control} />

                        <FormInput name='password' placeholder='********' label='password' control={control} />

                        <Button type='submit'>{formState.isSubmitting ? 'loading' : 'login'}</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Page;
