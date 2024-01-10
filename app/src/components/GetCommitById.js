import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/request";
import { Avatar, Grid } from "@mui/material";
import { getFormattedTime } from "../utils/dateFormatter";
import arrowDown from '../icons/arrow-down.svg';
import arrowRight from '../icons/arrow-right.svg';
import CodeMirror from 'codemirror-react';

const GetCommitById = () => {
  const params = useParams();
  const [gitData, setGitData] = useState(null);
  const [isCollapseFiles, setIsCollapseFiles] = useState([]);

  const getGitCommitById = async ({ oid, owner, repo }) => {
    try {
      const { res: { data } } = await getRequest(`repositories/${owner}/${repo}/commits/${oid}`);
      if (data) {
        setGitData(data);
        if (data.files && data.files.length > 0) {
          setIsCollapseFiles(Array(data.files.length).fill(false));
        }
      }
      console.log(data);
    } catch (error) {
      if (error) {
        console.error('Unable to process request', error);
      }
    }
  }

  const MemorizedPatch = React.memo(({ patch }) => (
    <CodeMirror
      value={patch}
      mode='javascript'
      theme='duotone-light'
      lineNumbers={true}
      readOnly={true}
    />
  ));

  const handleCollapseFile = (index) => {
    setIsCollapseFiles((prevValues) => {
      const updateValues = [...isCollapseFiles];
      updateValues[index] = !updateValues[index];
      return updateValues;
    });
  };

  useEffect(() => {
    const { oid, owner, repo } = params;
    if (oid && owner && repo) {
      getGitCommitById({ oid, owner, repo });
    }
    return () => { };
  }, [params]);

  if (!gitData) return <div>Loading...</div>;

  const {
    author: { avatar_url },
    commit: { message, author, committer },
    sha,
    parents,
    files
  } = gitData;

  return (
    <Grid container m={3} justifyContent='center'>
      <Avatar src={avatar_url} alt='User'></Avatar>
      <Grid xs={12} md={6} xl={9} marginLeft={'0.5rem'} container>
        <Grid
          className={'text-style-header'}
          xs={12}
          md={12}
        >{message}</Grid>
        <Grid
          xs={12}
          md={6}
          className={'text-style-body'}
          mt={0.5}
        >
          <span style={{ color: '#6D727C' }}>Authored by <b>{author.name}</b> {getFormattedTime(author.date)}</span>
        </Grid>
        <Grid
          xs={12}
          md={6}
          mt={0.5}
        >
          <span className={'text-style-body'} style={{ color: '#6D727C' }}>Commited by <b>{committer.name}</b> {getFormattedTime(committer.date)}</span>
        </Grid>
        <Grid
          xs={12}
          md={6}
          mt={0.5}
        >
          <span className={'text-style-body'}></span>
        </Grid>
        <Grid
          xs={12}
          md={6}
          mt={0.5}
        >
          <span className={'text-style-body'}><span style={{ color: '#6D727C' }}>Commit </span><b>{sha}</b></span>
        </Grid>
        <Grid
          xs={12}
          md={6}
          mt={0.5}
        >
          <span className={'text-style-body'}></span>
        </Grid>
        <Grid
          xs={12}
          md={6}
          mt={0.5}
        >
          <span style={{ color: '#6D727C' }}>Parent <b style={{ color: '#1C7CD6' }}>{parents[0].sha}</b></span>
        </Grid>
      </Grid>
      {files && files.length > 0 &&
        files.map((file, index) => {
          const { filename, patch } = file;
          return (
            <Grid xs={12} md={12} marginLeft={'4rem'} marginRight={'4rem'} key={index}>
              <Grid marginBottom={'.5rem'}>
                <img
                  src={isCollapseFiles[index] ? arrowRight : arrowDown}
                  onClick={() => handleCollapseFile(index)}
                />
                <span style={{ color: '#1C7CD6' }}>{filename}</span>
              </Grid>
              {!isCollapseFiles[index] && <MemorizedPatch key={index} patch={patch} />}
              <br />
            </Grid>
          )
        })
      }
    </Grid>
  );
}

export default GetCommitById;
