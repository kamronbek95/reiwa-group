import { motion } from 'framer-motion';
import './about-section2.scss';

export default function AboutSection2() {
  return (
    <section className='about-section2'>
      <div className='about-section2_banner'>
        <div className='wrapper'>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='about-header'>
              Необходимые документы для получения визы
            </h2>
          </motion.div>
        </div>
      </div>
      <div className='about-section2_description'>
        <div className='wrapper'>
          <p>
            <b>Лица, постоянно проживающие в Узбекистане,</b> желающие получить
            въездную туристическую визу на Кипр, не превышающую 90 дней, должны
            лично заблаговременно явиться в визовый отдел Почетного Генерального
            Консульства Республики Кипр и предоставить следующие документы:
          </p>
          <ol>
            <li>
              Паспорт, а также копия паспорта, действительный для выезда
              заграницу, срок действия которого истекает не менее чем за три
              месяца после истечения срока запрашиваемой визы.
            </li>
            <li>
              Анкета и одна фотография. Каждая графа анкеты заполняется
              по-русски или по-английски печатными буквами. Внимание: Проситель
              несет ответственность за предоставленную неверную или неполную
              информацию!
            </li>
            <li>
              Документы, касающиеся места работы заявителя.<br></br>
              <br></br>
              <p>
                <b>Для наемных работников:</b>
              </p>
              <ul>
                <li>
                  - заявление от работодателя, в котором должны быть указаны-
                  дата принятия данного лица на работу, его должность,
                  заработная плата – справка с места работы;
                </li>
                <li>- трудовая книжка и копия трудовой книжки.</li>
              </ul>
              <p>
                <b>Для независимых работников</b> (владельцев компаний, а так же
                лиц, занимающихся частной профессиональной деятельностью):
              </p>
              <ul>
                <li>
                  - акт о регистрации компании и свидетельство о занятии частной
                  профессиональной деятельностью;
                </li>
                <li>
                  - документы о текущей деятельности (последний квартальный
                  отчет, предоставленный в ГОРСТАТ или налоговую инспекцию,
                  подтверждающую уплату налогов за последние три месяца).
                </li>
              </ul>
              <p>
                <b>Для студентов:</b>
              </p>
              <ul>
                <li>- справка с места учебы или студенческое удостоверение;</li>
                <li>
                  - справка с места работы родителей с указанием должности и
                  заработной платы (если заявитель находится на попечении у
                  родителей).
                </li>
              </ul>
              <p>
                <b>Для пенсионеров:</b>
              </p>
              <ul>
                <li>- пенсионная книжка и ее копия.</li>
              </ul>
            </li>
            <li>
              Документы, подтверждающие наличие финансовых возможностей: -
              справки о наличии недвижимости, ренты или других источников
              дохода; - выписки из банковских счетов (собственных или компании,
              принадлежащие заявителю); - справки о доходах или справки об
              уплате налогов, балансы компании.
            </li>
            <li>
              Минимальная сумма, необходимая для пребывания на Кипре, не должна
              быть ниже 80 Евро в день на одного человека. Сумма предусмотрена в
              соответствии с последними статистическими данными. Если
              приглашенный не располагает собственными средствами, приглашающая
              сторона должна заключить на его имя гарантийный страховой полис
              или выдать банковскую гарантию на минимально возможную сумму в
              соответствии с указанным выше расчетом.
            </li>
            <li>
              Справка о составе семьи. Свидетельство о браке и рождении (для
              подтверждения родства.
            </li>
            <li>
              Медицинская страховка, действительная для всех стран Шенгенского
              договора. Документ, подтверждающий наличие жилья на Кипре -
              гостиничная бронь или заявление о предоставлении жилья со стороны
              частного лица, указываемого в приглашении, или же документ,
              удостоверяющий право собственности на недвижимость на Кипре.
            </li>
            <li>Бронь авиабилета или авиабилет.</li>
          </ol>
          <p>
            <strong>
              Внимание: неполные заявки не принимаются. Консульство оставляет за
              собой право запрашивать дополнительную документацию.
            </strong>
          </p>
          <p>
            Срок оформления визы: от 2 до 5 рабочих дней. Размер консульского
            сбора составляет от 120$.
          </p>
        </div>
      </div>
    </section>
  );
}
