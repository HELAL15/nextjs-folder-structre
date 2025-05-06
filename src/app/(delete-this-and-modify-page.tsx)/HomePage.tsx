import { FC } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { useTranslations } from 'next-intl';

const HomePage: FC = () => {
    const t = useTranslations();

    return (
        <>
            <main>
                <section>
                    <div className='container'>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Its animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <p>
                            {t('hello')}
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facere sapiente quis
                            quibusdam iure. Tempora porro officia itaque error illo a, dolorum quis, optio beatae
                            provident vero necessitatibus debitis laborum perferendis veniam cum corrupti! Iste, saepe
                            non. Autem eos soluta tenetur iusto, deleniti ab inventore accusantium voluptate possimus
                            totam architecto sed perspiciatis alias dolores, minus quae voluptatum harum ad sint saepe
                            modi quis odit vel. Vitae quae, ratione quas obcaecati quidem hic. Doloremque sint quaerat
                            dicta architecto. Beatae nobis suscipit eum velit iste illo quam aliquid eos quis cupiditate
                            voluptates reiciendis harum laborum, esse labore ipsam rerum quidem quibusdam maiores nemo?
                            Accusamus inventore cum culpa incidunt et, consequuntur officia nam nihil ducimus repellat.
                            Repellendus exercitationem numquam veniam quibusdam fugit omnis repudiandae dicta aperiam
                            esse pariatur amet nihil, necessitatibus rerum ipsum, tenetur modi laborum placeat libero
                            architecto, itaque enim! Iure, dolore officiis id iste hic quia voluptate itaque. Provident
                            blanditiis tempore aspernatur odit quis necessitatibus voluptates nulla veritatis!
                            Repellendus qui quaerat recusandae, unde fugit quas possimus, omnis sunt perspiciatis odit,
                            ut voluptatibus? Aspernatur cum aliquam nostrum mollitia dolorum incidunt, necessitatibus
                            consequuntur vero. Quae iste repellat perspiciatis harum ipsam tempora. Ut eius explicabo
                            libero fugit voluptatem non accusamus iusto dignissimos. Expedita illum rerum quidem
                            facilis! Dignissimos rerum eum obcaecati fugiat id vel ullam pariatur temporibus itaque,
                            deserunt inventore. Culpa ad sint unde omnis expedita alias perferendis sapiente. Sunt
                            eligendi minus voluptas sint corrupti in aliquam quisquam quas sapiente, modi consequatur
                            alias odio debitis dignissimos, facere veritatis ipsum. Voluptatum, possimus nemo, veniam
                            deleniti temporibus adipisci minus quibusdam recusandae dolorum eum aut incidunt sequi
                            cupiditate sit. Tempora, modi expedita. Unde, nihil labore. Nostrum, sapiente commodi
                            libero, labore hic excepturi, laborum modi similique iure ipsam cum. Iusto accusamus dolorem
                            ullam molestias repellat vitae magnam itaque? Fuga quibusdam expedita soluta dolorem
                            doloribus? Aliquam veniam, ipsam similique repudiandae ab consequatur magnam animi velit
                            ratione perferendis, eligendi quas doloribus aperiam labore sapiente nisi voluptatem
                            necessitatibus odio doloremque officiis atque minus tempore? Dolor nihil culpa, molestias,
                            id saepe reprehenderit officiis, possimus ab rerum voluptatem incidunt beatae nulla ratione
                            dignissimos tempore enim ut tenetur assumenda quas placeat quibusdam? Nam eaque tenetur
                            laborum. In eum numquam quam laudantium voluptate dicta vitae perspiciatis rem, hic a labore
                            magnam corrupti nisi modi distinctio cum ab quasi nesciunt delectus! Ullam excepturi non
                            unde! Voluptas mollitia nobis sint saepe officiis, cumque et assumenda fugit consequatur eos
                            possimus ea sit, quaerat culpa. Sunt ipsam eligendi dolorum unde molestias nam nesciunt
                            rerum asperiores maiores veniam mollitia, laborum provident ex laboriosam ad repellat
                            ducimus atque ut veritatis perferendis quae suscipit nemo minus eos? Unde neque autem,
                            cupiditate rerum ipsum fugit sequi vel numquam maiores, nisi facere eaque. Nulla ut maxime
                            expedita obcaecati. Inventore vel quam excepturi voluptates, cumque veniam velit assumenda
                            sint corrupti dolor consequuntur asperiores fugiat autem, earum, animi laudantium. Aperiam
                            dolor unde facere obcaecati consequuntur, eveniet, ullam non suscipit at corporis aliquam
                            dolorem cupiditate dicta modi architecto est quia consequatur vero recusandae vel.
                            Perferendis vel nisi deserunt quod omnis ea quo reprehenderit. Non, amet beatae voluptates
                            nobis at quis id nulla provident ex, magni debitis quam numquam ullam fuga neque praesentium
                            vero aperiam dignissimos vel. Excepturi sed vel, facere distinctio, ea impedit assumenda in
                            dolorem adipisci incidunt animi? Repudiandae, reiciendis sequi eius, nostrum, odit ut
                            perferendis excepturi distinctio possimus alias voluptate velit iure fugiat suscipit
                            perspiciatis vel ducimus ullam. Eum possimus sapiente culpa dignissimos reprehenderit illum.
                            Consequatur nemo harum quidem quaerat delectus, a, laborum corrupti nostrum obcaecati
                            architecto illum? Suscipit quis a eveniet harum fugit, maiores perspiciatis deserunt dicta
                            dolores, mollitia tempore distinctio delectus voluptas dolore alias labore veniam,
                            repellendus in. Sint nam sed ad, nobis unde debitis reiciendis quos porro repellendus animi
                            suscipit minima veritatis alias repudiandae voluptatem corrupti architecto amet nisi quis
                            praesentium quaerat vero officiis illo. Doloremque quidem perspiciatis nesciunt fugit
                            eligendi, nostrum, sequi, libero sit et debitis iure velit inventore dignissimos laudantium
                            similique doloribus! Accusamus nobis optio quae ducimus quia hic eaque dicta vel, delectus
                            recusandae. Aut, tenetur officiis illum nam distinctio odit? Reprehenderit nisi quae sequi
                            consequatur vel voluptate. Exercitationem, culpa officiis. Aperiam, ducimus sunt voluptate
                            unde est molestias voluptatum sequi eaque eum delectus, dignissimos non pariatur aut fuga
                            blanditiis laborum suscipit ad accusantium similique, explicabo quibusdam. Eligendi illum
                            nihil quod iusto alias architecto, quisquam at enim ut, reiciendis corrupti excepturi.
                            Laborum neque sit dolorum repellat at veniam provident est tempora delectus totam minima rem
                            quisquam, sapiente quia minus et harum magni modi accusamus pariatur eaque nostrum incidunt?
                            Delectus doloremque rerum, necessitatibus porro repellendus placeat fugit! Aperiam
                            consequatur dicta aliquam qui, corporis quod libero, aliquid velit, veniam ea excepturi
                            necessitatibus! Excepturi, rerum saepe. Quod minima excepturi ab voluptas necessitatibus
                            vero vel nulla consequatur est nemo assumenda omnis, tenetur modi quis eius. Itaque ipsa,
                            voluptate iusto rem saepe minus nobis esse tempore est ea ipsum dicta temporibus, doloribus
                            minima, sit ratione unde eum maiores beatae quis accusamus. Corrupti dolorum quos modi sit
                            architecto quia animi explicabo earum qui, molestias laborum enim inventore fuga! Ex quod
                            doloremque fugit labore voluptates saepe magnam quidem laborum ipsum delectus animi facere
                            ad laudantium laboriosam cupiditate aspernatur quae dolores sapiente, perferendis magni
                            nesciunt illum maiores veritatis tempore! Repellat tempora quod tenetur, nemo totam fugit
                            sunt fugiat quaerat perferendis consequatur quidem cupiditate doloribus exercitationem
                            corporis dolorem beatae nulla. Maiores facere facilis vitae eveniet recusandae ducimus animi
                            illum minus nulla repellat autem quod dicta accusantium eos aspernatur sint praesentium ex,
                            sapiente unde ad. Dolorum consequuntur fugit soluta aut beatae odio vitae quae sed
                            consequatur deleniti labore recusandae aperiam, voluptas suscipit modi ipsa vero deserunt?
                            Odit fugit officia, reiciendis nihil sapiente laborum odio blanditiis, illo nesciunt
                            inventore, necessitatibus omnis dignissimos minus maxime quisquam aut. Nesciunt tempora nam
                            reprehenderit doloribus totam illum qui rem ad eaque? Consectetur perferendis, tempora
                            incidunt vel quis expedita natus inventore esse voluptates reprehenderit tempore minima nemo
                            nihil, ipsum ea. At tempore fugit tenetur mollitia neque nobis dolor est facere deleniti
                            maiores repudiandae vitae expedita enim eligendi similique excepturi doloremque provident
                            dolores, eveniet maxime iusto. Modi in commodi magnam voluptate dolor distinctio quis illum
                            itaque aperiam quos!
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
