import { ProposalProps } from "../../interfaces/TemplateInterface";

export function SlackProposal(props: ProposalProps) {
  return (
    <div className='text-left text-[15px] leading-6 overflow-y-scroll h-96'>
      <div className='font-archivo mb-2'>
        <div className='space-x-2'>
          <p className='inline'>@channel</p>
          <span className='underline text-[rgba(68,68,68,0.4)]'>{props.subject}</span>
        </div>
      </div>
      <div>
        <p className='italic inline'>Kính gửi </p>
        <span className='italic underline text-[rgba(0,0,0,0.4)]'>
          {props.receiver}
          <span>
            ,<br />
          </span>
        </span>
        <p className='inline'>Dự án </p>
        <p className='underline inline text-[rgba(0,0,0,0.4)]'>Tên dự án </p>
        <p className='inline'>của </p>
        <p className='underline inline text-[rgba(0,0,0,0.4)]'>Tên các thành viên nhóm </p>
        <p className='inline'>đã hoàn thành proposal cho buổi thuyết minh đề tài. Em xin trân trọng gửi lời mời tới </p>
        <span className='underline text-[rgba(0,0,0,0.4)]'>{props.receiver} </span>
        <p className='inline'>
          cùng tham gia làm thành viên hội đồng duyệt dự án lần này của bạn. Sau đây là thông tin về buổi duyệt:
          <br />
        </p>
        <p className='inline'>▪️ Thời gian: </p>
        <span className='italic underline text-[rgba(0,0,0,0.4)]'>
          {props.timeSchedule} ngày {props.dateSchedule}
          <br />
        </span>
        <p className='inline'>▪️ Hình thức:</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>
          Offline tại Lab (ONLINE: Đường link)
          <br />
        </p>
        <p className='inline'>▪️ LINK file proposal:</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>
          <a href={props.link}>LINK proposal</a>
          <br />
        </p>
        <p className='inline'>
          Các anh/chị/bạn thành viên TickLab nếu có thể sắp xếp thời gian thì cũng có thể cùng tham dự buổi này với chúng em ạ. Chúc mọi
          người một buổi
        </p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>sáng/trưa/tối</p>
        <p className='inline'>
          vui vẻ.
          <br />
        </p>
        <p className='italic inline'>
          Kính mến,
          <br />
        </p>
        <span className='underline inline text-[rgba(0,0,0,0.4)]'>{props.sender}</span>
      </div>
    </div>
  );
}
