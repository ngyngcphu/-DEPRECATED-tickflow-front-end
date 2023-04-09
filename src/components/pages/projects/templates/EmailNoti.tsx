export function EmailProposal() {
  return (
    <div className='text-left text-[15px]'>
      <div className='font-archivo mb-2'>
        <div className='space-x-2'>
          <p className='inline '>Subject:</p>
          <p className='italic underline inline text-[rgba(68,68,68,0.4)]'>Tiêu đề nội dung</p>
        </div>
        <div className='space-x-2'>
          <p className='inline'>Receiver:</p>
          <p className='italic underline inline text-[rgba(68,68,68,0.4)]'>Người nhận</p>
        </div>
        <div className='space-x-2'>
          <p className='inline'>CC:</p>
          <p className='italic underline inline text-[rgba(68,68,68,0.4)]'>CC</p>
        </div>
        <div className='space-x-2'>
          <p className='inline'>BCC:</p>
          <p className='italic underline inline text-[rgba(68,68,68,0.4)]'>BCC</p>
        </div>
      </div>
      <div>
        <p className='italic inline'>Kính gửi</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>Người nhận</p>
        <p className='italic inline'>
          ,
          <br />
        </p>
        <p className='inline'>Dự án</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>Tên dự án</p>
        <p className='inline'>của</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>Tên các thành viên nhóm</p>
        <p className='inline'>đã hoàn thành proposal cho buổi thuyết minh đề tài. Em xin trân trọng gửi lời mời tới</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>Người nhận</p>
        <p className='inline'>
          cùng tham gia làm thành viên hội đồng duyệt dự án lần này của bạn. Sau đây là thông tin về buổi duyệt:
          <br />
        </p>
        <p className='inline'>▪️ Thời gian:</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>
          Lịch hẹn
          <br />
        </p>
        <p className='inline'>▪️ Hình thức:</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>
          Offline tại Lab (ONLINE: Đường link)
          <br />
        </p>
        <p className='inline'>▪️ LINK file proposal:</p>
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>
          LINK proposal
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
        <p className='italic underline inline text-[rgba(0,0,0,0.4)]'>Người gửi.</p>
      </div>
    </div>
  );
}
