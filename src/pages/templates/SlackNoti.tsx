export function SlackProposal(props: SendNoti) {
  return (
    <div className='h-96 overflow-y-scroll text-left text-[15px] leading-6'>
      <div className='mb-2 font-archivo'>
        <div className='space-x-2'>
          <p className='inline'>@channel</p>
          <span className='text-[rgba(68,68,68,0.4)] underline'>{props.subject}</span>
        </div>
      </div>
      <div>
        <p className='inline italic'>Kính gửi </p>
        <span className='italic text-[rgba(0,0,0,0.4)] underline'>
          {props.receiver}
          <span>
            ,<br />
          </span>
        </span>
        <p className='inline'>Dự án </p>
        <p className='inline text-[rgba(0,0,0,0.4)] underline'>Tên dự án </p>
        <p className='inline'>của </p>
        <p className='inline text-[rgba(0,0,0,0.4)] underline'>Tên các thành viên nhóm </p>
        <p className='inline'>
          đã hoàn thành proposal cho buổi thuyết minh đề tài. Em xin trân trọng gửi lời mời tới{' '}
        </p>
        <span className='text-[rgba(0,0,0,0.4)] underline'>{props.receiver} </span>
        <p className='inline'>
          cùng tham gia làm thành viên hội đồng duyệt dự án lần này của bạn. Sau đây là thông tin về
          buổi duyệt:
          <br />
        </p>
        <p className='inline'>▪️ Thời gian: </p>
        <span className='italic text-[rgba(0,0,0,0.4)] underline'>
          {props.timeSchedule} ngày {props.dateSchedule}
          <br />
        </span>
        <p className='inline'>▪️ Hình thức:</p>
        <p className='inline italic text-[rgba(0,0,0,0.4)] underline'>
          Offline tại Lab (ONLINE: Đường link)
          <br />
        </p>
        <p className='inline'>▪️ LINK file proposal:</p>
        <p className='inline italic text-[rgba(0,0,0,0.4)] underline'>
          <a href={props.link}>LINK proposal</a>
          <br />
        </p>
        <p className='inline'>
          Các anh/chị/bạn thành viên TickLab nếu có thể sắp xếp thời gian thì cũng có thể cùng tham
          dự buổi này với chúng em ạ. Chúc mọi người một buổi
        </p>
        <p className='inline italic text-[rgba(0,0,0,0.4)] underline'>sáng/trưa/tối</p>
        <p className='inline'>
          vui vẻ.
          <br />
        </p>
        <p className='inline italic'>
          Kính mến,
          <br />
        </p>
        <span className='inline text-[rgba(0,0,0,0.4)] underline'>{props.sender}</span>
      </div>
    </div>
  );
}
