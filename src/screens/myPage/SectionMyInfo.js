import React, {useEffect} from 'react';
import styled from 'styled-components';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import * as mypageActions from '../../store/modules/mypage/actions';
import AreaTit from '../../components/Texts/AreaTit';
import StateButton from '../../components/Buttons/StateButton';
import TextView from './TextView/TextView';

function SectionMyInfo() {
  const onPress = () => {
    Actions.Modified();
  };

  const {name, account, phone_number, birthday, address} = useSelector(
    state => ({
      name: state.mypage.name,
      account: state.mypage.account,
      phone_number: state.mypage.phone_number,
      birthday: state.mypage.birthday,
      address: state.mypage.address,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect');
    dispatch(mypageActions.get_mypage());
  }, [dispatch]);
  return (
    <Myinfo>
      <Wrapper>
        <TextArea>
          <AreaTit style={styles.title}>나의정보</AreaTit>
          <StageBox>
            <StateButton onPress={onPress}>수정</StateButton>
          </StageBox>
        </TextArea>
        <InputArea>
          <InputTit>아이디</InputTit>
          <InputBox>
            <TextView>{account}</TextView>
          </InputBox>
        </InputArea>
        <InputArea>
          <InputTit>이름</InputTit>
          <InputBox>
            <TextView>{name}</TextView>
          </InputBox>
        </InputArea>
        <InputArea>
          <InputTit>휴대폰 번호</InputTit>
          <InputBox>
            <TextView>{phone_number}</TextView>
          </InputBox>
        </InputArea>
        <InputArea>
          <InputTit>주민번호</InputTit>
          <InputBox>
            <TextView>{birthday}</TextView>
            <InputText>-</InputText>
            <TextView>{birthday}</TextView>
          </InputBox>
        </InputArea>
        <InputArea>
          <InputTit>주소</InputTit>
          <InputBox>
            <TextView>{address}</TextView>
          </InputBox>
        </InputArea>
      </Wrapper>
    </Myinfo>
  );
}

export default SectionMyInfo;

const styles = StyleSheet.create({
  title: {
    color: '#69727b',
    fontWeight: 'bold',
  },
});

const Myinfo = styled.View`
  background-color: #ffffff;
  margin-bottom: 10px;
`;

const Wrapper = styled.View`
  padding: 25px 20px 36px;
`;

const TextArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 9px;
`;

const StageBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputArea = styled.View`
  padding: 7px 0;
`;

const InputTit = styled.Text`
  padding-bottom: 6px;
  font-size: 13px;
  color: #48515a;
  line-height: 20px;
`;

const InputBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InputText = styled.Text`
  padding: 0 12px;
  color: #48515a;
`;
