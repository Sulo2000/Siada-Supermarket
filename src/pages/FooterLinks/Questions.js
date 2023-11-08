import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { questions } from "../../lists/questions";

export default function Questions() {
  return (
    <div className="questions__section">
        <h2>Frequently Asked Questions</h2>
      <div className="questions__container">
        <div className="advertising">
          <img src="img/reklam.png" data-aos="flip-down" alt="" />
        </div>
        <div className="questions__part">
          <Accordion allowZeroExpanded={true}>
            {questions.map((question) => {
              return (
                <AccordionItem key={question.id} data-aos="fade-right">
                  <AccordionItemHeading>
                    <AccordionItemButton data-aos="fade-down-right">
                      <h3 data-aos="fade-down-left">{question.question}</h3>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    dangerouslySetInnerHTML={{ __html: question.answer}} 
                  ></AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
