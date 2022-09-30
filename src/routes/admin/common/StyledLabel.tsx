import styled from 'styled-components';

interface IProps {
  color: string;
  m: string;
  size: string;
  center: string;
  italic: string;
  capit: string;
  children?: React.ReactNode;
}

const StyledLabel = (props: IProps) => {
  return <Heading {...props}>{props.children}</Heading>;
};

const Heading = styled.h4<IProps>`
  color: ${(props) => props.color || '#888888'};
  margin: ${(props) => props.m};
  text-align: ${(props) => props.center ? 'center': 'left'};
  font-size: ${(props) => props.size};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: bolder;
  text-transform: ${(props) => (props.capit ? 'capitalize' : 'uppercase')};
`;

export default StyledLabel;
