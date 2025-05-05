/**
 * ==> Component
 */
const loading = () => {
    return (
        <>
            <section className='flex min-h-screen items-center justify-center'>
                <span className='h-16 w-16 animate-spin rounded-full border-4 border-slate-600 border-t-transparent' />
            </section>
        </>
    );
};

export default loading;
