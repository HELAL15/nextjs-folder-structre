'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/Button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useCookie from '@/hooks/useCookies';
import axiosClient from '@/lib/axiosClient';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' })
});

const Page = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const { formState } = form;

    const router = useRouter();
    const [cookieValue, setCookie, removeCookie] = useCookie('token', '');

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
        <section className='h-[89vh]'>
            <div className='container grid h-full place-items-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-4 md:w-[400px]'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder='a**@gmail.com' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='password' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type='submit'>{formState.isSubmitting ? 'loading' : 'login'}</Button>
                    </form>
                </Form>
            </div>
        </section>
    );
};

export default Page;
