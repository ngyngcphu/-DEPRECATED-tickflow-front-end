import { ReactNode, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const templates: Array<string> = [
  "Thư mời hội đồng",
  "Chốt lịch duyệt proposal",
  "Thư mời buổi báo cáo",
  "Thư mời chia sẻ kiến thức",
  "Thông báo đổi lịch",
  "Thông báo đổi địa điểm",
  "Bổ sung tài liệu",
  "Create new templates"
];

function Proposal() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <span onClick={() => setShow(true)}>{templates[0]}</span>
      <Modal show={show} size='md' popup={true} onClose={() => setShow(false)}>
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Hiện tại chưa có chức năng này. Bạn vui lòng liên hệ Admin để nhận thông tin truy cập.
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

function Council() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <span onClick={() => setShow(true)}>{templates[1]}</span>
      <Modal show={show} size='md' popup={true} onClose={() => setShow(false)}>
        <Modal.Body>
          <div className='text-center'>
            <ExclamationCircleIcon className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>Ahihi</h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={() => setShow(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export const Notification: Array<ReactNode> = [<Proposal />, <Council />];
