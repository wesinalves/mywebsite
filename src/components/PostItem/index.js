import React from 'react';
import * as S from './styled';

const PostItem = () => (
    <S.PostItemLink to="/slug">
    <S.PostItemWrapper>
      <S.PostItemTag background="#47650b">Misc</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          30 de julho de 2020 . 5 min de leitura
        </S.PostItemDate>
        <S.PostItemTitle>Meu artigo show</S.PostItemTitle>
        <S.PostItemDescription>Meu artigo sobre gatsby geral</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>

)

export default PostItem;