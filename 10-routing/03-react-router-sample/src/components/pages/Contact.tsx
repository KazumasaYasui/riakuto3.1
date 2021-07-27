import React from 'react';
import { FC } from 'react';

const Contact: FC<{ destAddress: string }> = ({ destAddress = "hoge@example.com" }) => (
  <>
    <p>問い合わせページですー！</p>
    <p>お問い合わせ先はこちら</p>
    <a href={"mailto:"+destAddress}>{destAddress}</a>
  </>
)

export default Contact;
