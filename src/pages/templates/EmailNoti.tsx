import { Preview, Container, Section, Text, Hr } from "@react-email/components";

export function EmailProposal(props: SendNoti) {
  return (
    <div>
      {" "}
      {/* <Html> */}
      <div /> {/* <Head /> */}
      <Preview>Chốt lịch duyệt proposal</Preview>
      <div className='font-inter'>
        {" "}
        {/* <Body> */}
        <Section>
          <Text className='!text-[16px]'>
            Subject:<b> {props.subject} </b>
          </Text>
          <Text className='!text-[16px]'>
            Receiver:<b> {props.receiver} </b>
          </Text>
          <Text className='!text-[16px]'>
            CC:<b> CC </b>
          </Text>
          <Text className='!text-[16px]'>
            BCC:<b> BCC </b>
          </Text>
        </Section>
        <Hr />
        <Container>
          <Section>
            <Text className='!text-[16px]'>
              Kính gửi<b> {props.receiver}</b>,
            </Text>
          </Section>
          <Section>
            <Text className='!text-[16px]'>
              Dự án<b> Tên dự án </b>của<b> Tên các thành viên nhóm </b> đã hoàn thành proposal cho buổi thuyết minh đề tài. Em xin trân
              trọng gửi lời mời tới<b> {props.receiver} </b>
              cùng tham gia làm thành viên hội đồng duyệt dự án lần này của bạn. Sau đây là thông tin về buổi duyệt:
            </Text>
          </Section>
          <Section>
            <Text className='!text-[16px]'>
              - Thời gian:
              <b>
                {" "}
                {props.timeSchedule} {props.dateSchedule}{" "}
              </b>
            </Text>
            <Text className='!text-[16px]'>
              - Hình thức:
              <b> Offline tại Lab (ONLINE: Đường link) </b>
            </Text>
            <Text className='!text-[16px]'>
              - LINK file proposal:
              <b>
                <a href={props.link}> LINK proposal </a>
              </b>
            </Text>
          </Section>
          <Section>
            <Text className='!text-[16px]'>
              Các anh/chị/bạn thành viên TickLab nếu có thể sắp xếp thời gian thì cũng có thể cùng tham dự buổi này với chúng em ạ. Chúc mọi
              người một buổi sáng/trưa/tối vui vẻ
            </Text>
          </Section>
          <Section>
            <Text className='!text-[16px]'>
              Kính mến,<b> {props.sender} </b>
            </Text>
          </Section>
        </Container>
      </div>{" "}
      {/* </Body> */}
    </div> /* </Html> */
  );
}
