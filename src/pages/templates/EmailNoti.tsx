import { Html, Head, Preview, Body, Container, Section, Text, Hr } from "@react-email/components";
import { ProposalProps } from "../../interfaces/TemplateInterface";

export function EmailProposal(props: ProposalProps) {
  return (
    <Html>
      <Head />
      <Preview>Chốt lịch duyệt proposal</Preview>
      <Body>
        <Section>
          <Text>
            Subject: <span className='underline text-[rgba(68,68,68,0.4)]'>{props.subject}</span>
          </Text>
          <Text>
            Receiver: <span className='underline text-[rgba(68,68,68,0.4)]'>{props.receiver}</span>
          </Text>
          <Text>
            CC: <span className='underline text-[rgba(68,68,68,0.4)]'>CC</span>
          </Text>
          <Text>
            BCC: <span className='underline text-[rgba(68,68,68,0.4)]'>BCC</span>
          </Text>
        </Section>
        <Hr />
        <Container>
          <Section>
            <Text>
              Kính gửi <span className='italic underline text-[rgba(0,0,0,0.4)]'>{props.receiver}</span>
            </Text>
          </Section>
          <Section>
            <Text>
              Dự án Tên dự án của Tên các thành viên nhóm đã hoàn thành proposal cho buổi thuyết minh đề tài. Em xin trân trọng gửi lời mời
              tới <span className='underline text-[rgba(0,0,0,0.4)]'>{props.receiver} </span>
              cùng tham gia làm thành viên hội đồng duyệt dự án lần này của bạn. Sau đây là thông tin về buổi duyệt:
            </Text>
          </Section>
          <Section>
            <Text>
              Thời gian:{" "}
              <span className='italic underline text-[rgba(0,0,0,0.4)]'>
                {props.timeSchedule} ngày {props.dateSchedule}
              </span>
            </Text>
            <Text>Hình thức: Offline tại Lab (ONLINE: Đường link)</Text>
            <Text>
              LINK file proposal:{" "}
              <span className='italic underline text-[rgba(0,0,0,0.4)]'>
                <a href={props.link}>LINK proposal</a>
              </span>
            </Text>
          </Section>
          <Section>
            <Text>
              Các anh/chị/bạn thành viên TickLab nếu có thể sắp xếp thời gian thì cũng có thể cùng tham dự buổi này với chúng em ạ. Chúc mọi
              người một buổi sáng/trưa/tối vui vẻ
            </Text>
          </Section>
          <Section>
            <Text>
              Kính mến, <span className='underline inline text-[rgba(0,0,0,0.4)]'>{props.sender}</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
