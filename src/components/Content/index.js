import React from 'react';

import BodyContent from './BodyContent';
import FooterContent from './FooterContent';
import HeaderContent from './HeaderContent';

const Content = () => {
  return (
    <div className="content__inner">
      <HeaderContent />
      <BodyContent />
      <FooterContent />
    </div>
  );
};

export default Content;
