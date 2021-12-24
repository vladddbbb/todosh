import React from 'react';

import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';
import Image from 'antd/es/image';

import Collapse from 'antd/es/collapse';

const { Panel } = Collapse;

import mainPageImg from '@src/assets/main_page.png';
import todosPageImg from '@src/assets/todos_page.png';
import todoEditImg from '@src/assets/card_edit.png';
import deleteModalImg from '@src/assets/delete_modal.png';
import unfinishedTodoImg from '@src/assets/unfinishedTodo.png';
import finishedTodoImg from '@src/assets/finishedTodo.png';
import createTagsImg from '@src/assets/create_tags.png';
import tagsFilterImg from '@src/assets/tagsFilter.png';
import responsiveImg from '@src/assets/responsive.png';

import './_help.css';

const HelpPage = () => {
  return (
    <div className="help-page">
      <div className="help-page__container">
        <Title level={1}>How to use Todosh App</Title>
        <Paragraph>
          Welcome to Todosh app page! In next sections you will see some feature guides.
        </Paragraph>
        <Collapse className="help-page__collapse" defaultActiveKey={['1']}>
          <Panel header={<Title level={3}>Getting started</Title>} key="1">
            <Title level={4}>Main page with menu and description</Title>
            <p className="help-page__p">The main page looks like this:</p>
            <Image className="help-page__image" src={mainPageImg} />
            <p className="help-page__p">
              This page contains a description, a sidebar with links to other pages. And the page
              with todos looks like this:
            </p>
            <Image className="help-page__image" src={todosPageImg} />
          </Panel>
          <Panel header={<Title level={3}>Todos management</Title>} key="2">
            <Title level={4}>Add todo feature</Title>
            <p className="help-page__p">
              On the todos page, in the header, there is a form for adding a todo with the following
              fields:
            </p>
            <ul className="help-page__p">
              <li>name (required)</li>
              <li>description</li>
              <li>finishDatetime (defines deadline)</li>
              <li>tags (attached)</li>
            </ul>
            <Title level={4}>Edit todo feature</Title>
            <p className="help-page__p">
              The task is edited by pressing the edit button on the task. After that, the card takes
              the following form:
            </p>
            <Image src={todoEditImg} />
            <p className="help-page__p">
              After editing, to cancel - click the cross, to confirm the editing - click the tick.
            </p>
            <Title level={4}>Delete todo feature</Title>
            <p className="help-page__p">
              To delete, click the trash icon, and confirm it in the modal:
            </p>
            <Image src={deleteModalImg} />
            <Title level={4}>Todo completion feature</Title>
            <p className="help-page__p">
              The completion mark is set in the checkbox to the left of the todo name. Marking
              cannot be done in edit mode. Card in an unfinished state:
            </p>
            <Image src={unfinishedTodoImg} />
            <p className="help-page__p">Card in an finished state (slightly transparent):</p>
            <Image src={finishedTodoImg} />
            <Title level={4}>Changing the order of tasks feature</Title>
            <p className="help-page__p">
              To change the order of tasks, use the buttons to the right of the card name.
            </p>
            <Title level={4}>Search todo by description feature</Title>
            <p className="help-page__p">
              It could be done by entering a value into the search box on the top of page.
            </p>
            <Title level={4}>Sort in the order of the most recent updates</Title>
            <p className="help-page__p">
              Sorting is done by toggling the Created and Updated buttons on the todos page.
            </p>
            <Title level={4}>Add timer/deadline feature</Title>
            <p className="help-page__p">
              A timer can be added using the field for creating or deleting a task. If the value is
              not entered, then the timer is not displayed on the card in the same row with the
              delete / update buttons.
            </p>
          </Panel>
          <Panel header={<Title level={3}>Tags management</Title>} key="3">
            <Title level={4}>Attach tag to todo feature</Title>
            <p className="help-page__p">
              Adding a tag to a task is possible only in the card editing mode. By clicking the
              "Attach New Tag" button, select is displayed to add corresponding tag.
            </p>
            <Title level={4}>Create tag feature</Title>
            <p className="help-page__p">Tags are created through this element:</p>
            <Image src={createTagsImg} />
            <p className="help-page__p">
              Everything is intuitive, leave from an element/pressing the enter key adds the tag to
              the page.
            </p>
            <Title level={4}>Filter by tags feature</Title>
            <p className="help-page__p">
              By clicking on a tag, it is added to the list for filtering. On one more press - it is
              deleted:
            </p>
            <Image src={tagsFilterImg} />
          </Panel>
          <Panel header={<Title level={3}>About responsive design</Title>} key="4">
            <p className="help-page__p">On the mobile devices the page looks like this:</p>
            <Image src={responsiveImg} />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default HelpPage;
