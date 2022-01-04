import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { resetError, resetSuccessMessage } from '../../redux/actions';
import PageLoader from '../PageLoader';

const ContentLoader = () => {
  const { error, loading, message } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (error) dispatch(resetError());
      if (message) dispatch(resetSuccessMessage());
    }, 3000);
  }, [dispatch, error, message]);

  return (
    <>
      {!!loading && <PageLoader />}
      {error && (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(error)}
          message={error}
          className="snackbar__error"
        />
      )}
      {message && (
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(message)}
          message={message}
          className="snackbar__success"
        />
      )}
    </>
  );
};

export default ContentLoader;
