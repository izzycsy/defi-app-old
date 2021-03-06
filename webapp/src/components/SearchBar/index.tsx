import React from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import {
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from 'reactstrap';
import classnames from 'classnames';
import styles from './SearchBar.module.scss';
import { I18n } from 'react-redux-i18n';

interface SearchBarProps {
  searching: any;
  toggleSearch: any;
  onChange: (e) => void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = (
  props: SearchBarProps
) => {
  return (
    <div
      className={classnames({ 'd-block': props.searching }, styles.searchBar)}
    >
      <FormGroup className={`row ${styles.formGroup}`}>
        <Col>
          <InputGroup>
            <Input
              type='text'
              placeholder={I18n.t(
                'containers.masterNodes.masterNodesPage.searchBar'
              )}
              name='searchInput'
              id='searchInput'
              onChange={props.onChange}
            />
            <MdSearch className={styles.searchIndicator} />
            <InputGroupAddon addonType='append'>
              <Button color='outline-primary' onClick={props.toggleSearch}>
                <MdClose />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
    </div>
  );
};

export default SearchBar;
