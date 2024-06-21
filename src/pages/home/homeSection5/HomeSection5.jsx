import { motion } from 'framer-motion';
import './homeSection5.scss';

export const HomeSection5 = () => {
  return (
    <section className='home__section5'>
      <div className='wrapper'>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h1>Услуги представительства</h1>
          <p>
            <strong>Reiwa</strong> имеет собственного представителя,
            действующего от имени компании и представляющего ее интересы на
            территории РУз. Его деятельность предполагает информационную
            поддержку и техническое сопровождение потенциальных инвесторов на
            этапе знакомства с недвижимостью.
          </p>
          <p>
            <strong>
              Наша команда состоит из профессиональных консультантов, которые
              знают каждый аспект жизни на острове:
            </strong>
            <ul>
              <li>- регистрация юридического лица</li>
              <li>- открытие банковского счета</li>
              <li>- налоговое планирование</li>
              <li>- полное сопровождение покупки дома вашей мечты</li>
              <li>- управление недвижимостью</li>
              <li>- получение постоянного вида на жительства</li>
            </ul>
          </p>
          <p>
            <strong>
              Мы занимаемся предоставлением клиентам достоверной и актуальной
              информации в области:
            </strong>
            <ul>
              <li>
                ⁃ реализуемых жилых и коммерческих объектов, а также собственных
                проектов Reiwa Group;
              </li>
              <li>
                ⁃ жизни на Кипре (экономика, климатические условия, еда, досуг,
                шопинг, обучение, медицина и пр);
              </li>
              <li>⁃ порядка получения ПМЖ;</li>
              <li>⁃ порядка и правил получения визы для граждан РУз;</li>
              <li>⁃ вариантов авиаперелетов;</li>
              <li>⁃ обработки персональных запросов.</li>
            </ul>
          </p>
          <p>
            <strong>
              Помощь в планировании и организации поездки на Кипр:
            </strong>
            <ul>
              <li>⁃ консультирование по части бронирования авиабилетов;</li>
              <li>
                ⁃ организация трансфера и персональное сопровождение на Кипре;
              </li>
              <li>⁃ планирование встреч в офисах девелоперов на Кипре.</li>
            </ul>
          </p>
          <p>
            <strong>
              Организация онлайн и персональных встреч потенциальных покупателей
              с юристами и официальными представителями кипрской стороны:
            </strong>
            <ul>
              <li>
                ⁃ выбор оптимальной платформы и времени встречи для обеих
                сторон;
              </li>
              <li>
                ⁃ подготовка и обработка вопросов/запросов для обратной связи с
                инвесторами.
              </li>
            </ul>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
