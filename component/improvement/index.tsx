import { Badge, Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import { IImprovement } from './IImprovement';

type Payload = IImprovement.Payload;

export const Improvement = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="IMPROVEMENTS">
      {payload.list.map((item, index) => (
        <div key={item.title}>
          {index > 0 && <hr />}
          <Row>
            <Col sm={12} md={3} className="text-md-right">
              <h6 style={Style.gray}>{item.company}</h6>
            </Col>
            <Col sm={12} md={9}>
              <h4>
                {index + 1}. {item.title}
              </h4>
              <p>
                <strong>{item.summary}</strong>
              </p>
              {item.sections.map((section) => (
                <div className="mt-3" key={section.title}>
                  <h5>{section.title}</h5>
                  <ul>
                    {section.descriptions.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {item.notes && (
                <div className="mt-3">
                  <h5>비고</h5>
                  <ul>
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}
              <strong>사용 기술</strong>
              <div>
                {item.technologies.map((technology) => (
                  <Badge
                    style={Style.skillKeywordBadge}
                    key={technology}
                    color="secondary"
                    className="mr-1"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </CommonSection>
  );
}
