import Container from "./container";
import TrackVisibility from "react-on-screen";
function TimeLine() {
  const content = [
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
    {
      time: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quisiuvaret expetendis his, te elit voluptua dignissim per, habeo iustoprimis ea eam.",
    },
  ];
  return (
    <div className="timeline">
      {content.map((item, index) => {
        return (
          <TrackVisibility key={index}>
            <Container
              time={item.time}
              content={item.content}
              pos={(index + 1) % 2 === 0 ? "container right" : "container left"}
            />
          </TrackVisibility>
        );
      })}
    </div>
  );
}

export default TimeLine;
