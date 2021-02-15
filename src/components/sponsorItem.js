import React from "react";
import Img from "gatsby-image";

const SponsorItem = ({ href, fluid }) => (
  <td width="20%" className="sponsors__image-wrap tableItem">
    <a href={href}>
      <Img fluid={fluid} />
    </a>
  </td>
);

const SponsorTable = ({ feature }) => {
  let f = feature.slice(0, feature.length);
  if (feature.length > 4) {
    let k = [];
    while (f.length > 0) {
      const g = f.splice(0, 4);
      k.push(g);
    }
    return (
      <table width="65%" className="mx-auto">
        <tbody>
          {k.map((index) => (
            <tr height="140px">
              {index.map((sponsor) => (
                <SponsorItem href={sponsor.description} fluid={sponsor.fluid} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <table width="70%" className="mx-auto">
        <tbody>
          <tr>
            {feature.map((sponsor) => (
              <SponsorItem href={sponsor.description} fluid={sponsor.fluid} />
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
};

export default SponsorTable;
