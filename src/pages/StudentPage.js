import { Table, Footer, Button} from 'flowbite-react';
import Nav from '../components/Nav'

function StudentPage() {
  return (
    <>
    <Nav />
     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '90px' }}>
      <div className="overflow-x-auto" style={{ width: '100%', maxWidth: '1300px' }}>
        <Footer container>
          Faculties
          <Button backgroundcolour="red" href="#">
            Add
          </Button>
        </Footer>
      </div>
      <div className="overflow-x-auto" style={{ width: '100%', maxWidth: '1300px' }}>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Phone Number</Table.HeadCell>
            <Table.HeadCell>Course</Table.HeadCell>
            <Table.HeadCell>Edit</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                1
              </Table.Cell>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>Doe</Table.Cell>
              <Table.Cell>Email Here</Table.Cell>
              <Table.Cell>Phone Number</Table.Cell>
              <Table.Cell>Course</Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  ✏️
                </a>
              </Table.Cell>
              <Table.Cell>
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  🗑️
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
     </div>
    </>
  );
}

export default StudentPage;
