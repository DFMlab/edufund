import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row, Nav } from "react-bootstrap";
import { Card, Image, ProgressBar, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import useProjectAdminContract from "./../../../hooks/useProjectAdminContract.js";

import useProjectContract from "./../../../hooks/useProjectContract.js";

import donateUtil from "./../../../utils/donate.js";

import { useContractKit } from "@celo-tools/use-contractkit";

import getMetaData from "./../../../utils/getMetaData.js";

import BigNumber from "big-number";

import "./Home.css";

const Home = () => {
  const projectAdminContract = useProjectAdminContract();

  const [startProject, setStartProject] = useState(0);

  const [totalProject, setTotalProject] = useState(0);

  const [projects, setProjects] = useState([]);

  const { address, performActions } = useContractKit();

  const pageSize = 10;

  const getTotalProject = useCallback(() => {
    const _getTotalProject = async () => {
      const _totalProject = await projectAdminContract.methods
        .projectsCount()
        .call();
      console.log(_totalProject);

      setTotalProject(_totalProject);
    };
    _getTotalProject();
  }, [setTotalProject, projectAdminContract]);

  const getProjects = useCallback(() => {
    const projectsAddress = [];

    const _getProjectAddress = async (projectNumber) => {
      const _projectAddress = await projectAdminContract.methods
        ._projects(projectNumber)
        .call();
      return _projectAddress;
    };

    for (
      let _startProject = parseInt(startProject);
      _startProject < startProject + pageSize && _startProject < totalProject;
      _startProject++
    ) {
      projectsAddress.push(_getProjectAddress(_startProject));
    }

    return projectsAddress;
  }, [startProject, totalProject, projectAdminContract]);

  const getNextProjects = async (_totalProject, _endstartProject) => {
    if (totalProject > startProject || startProject === 0) {
      setStartProject(totalProject + pageSize);
      const _projectsAddress = await Promise.all(getProjects());

      setProjects([...projects, ..._projectsAddress]);
    }
  };

  useEffect(() => {
    if (address && projectAdminContract && totalProject === 0) {
      console.log(getTotalProject());
    }
  }, [
    address,
    totalProject,
    projectAdminContract,
    setProjects,
    getTotalProject,
  ]);


  const ProjectCard = ({ contractAddress }) => {
    const projectContract = useProjectContract(contractAddress);

    const [amount, setAmount] = useState(0);

    const [metaData, setMetaData] = useState({});

    const [meta, setMeta] = useState({})

    useEffect(() => {
      if (projectContract) {
        const _setMetaData = async () => {
          setMetaData(await _getProjectMetaData(projectContract));
        };

        _setMetaData();
      }
    }, [projectContract]);


    useEffect(() => {
      
      if(metaData) {
        const _setMeta = async () => {
          setMeta(await _getProjectMeta(metaData["5"]));
        };

        _setMeta();
      }
    },[metaData])

    const _getProjectMetaData = async (contract) => {
      return await getMetaData(contract);
    };

    const donate = (e, customAmount) => {
      e.preventDefault();
      donateUtil(projectContract, performActions, customAmount);
    };

    const _getProjectMeta = async (url) => {
      const response =  await fetch(url)

      const _meta = await response.json()

      console.log(_meta)

      return _meta

    }

    const amountRaised = useMemo(() => {
      console.log(metaData)
      if (metaData !== {}) {      
        return BigNumber(metaData["2"]).div(BigNumber(10).power(18)).toString();
      } else {
        return "0"
      }
    }, [metaData]);

    if(metaData["0"] !== "0") {
      return null
    }

    return (
      <Col xs="4">
        <Card
          style={{ width: "22rem" }}
          className="shadow m-auto p-0 mb-2 bg-body rounded type-card"
        >
          <Card.Body>
            <Image src={ meta.images ?  meta.images[0]: '#'} width="100%" />
            <Card.Title className="type-card__title">
            { meta.projectTitle }
            </Card.Title>
            <Card.Subtitle className="subtitle">
              { meta.description }
              <br /> <br />
              <div className="custom-amount my-3">
                <button
                  onClick={(e) => donate(e, "10")}
                  className="btn p-3 m-auto btn-sm btn-primary"
                >
                  $10
                </button>
                <button
                  onClick={(e) => donate(e, "20")}
                  className="btn p-3 m-auto btn-sm btn-primary"
                >
                  $20
                </button>
                <button
                  onClick={(e) => donate(e, "50")}
                  className="btn p-3 m-auto btn-sm btn-primary"
                >
                  $50
                </button>
                <button
                  onClick={(e) => donate(e, "100")}
                  className="btn p-3 m-auto btn-sm btn-primary"
                >
                  $100
                </button>
              </div>
              <Form>
                <div className="desired-amount">
                  <Form.Control
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    name="custom amount"
                    placeholder="Enter a custom amount"
                  />
                  <button
                    onClick={(e) => donate(e, amount)}
                    className="btn btn-primary"
                  >
                    Donate
                  </button>
                </div>
              </Form>
              <ProgressBar
                className="mt-5"
                now={
                  metaData
                    ? BigNumber(metaData["2"]).div(metaData["3"]).multiply(100)
                    : 0
                }
              />
              <div className="amount">
                <p>Amount raised</p>
                <p> {amountRaised} CELO</p>
              </div>
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  const ProjectCards = () => {
    const projectCards = projects.map((e) => (
      <ProjectCard key={e} contractAddress={e} />
    ));

    return projectCards;
  };

  return (
    <main>
      <div className="mainPage">
        <Container>
          <Row>
            <Col xs="6" className="mainLeft">
              <h2>
                Learning should be{" "}
                <span style={{ color: "#2B53AE" }}>easy and accessible</span> to
                all
              </h2>
              <p>
                At Edufund we create equal opportunity for passionate learners
                to learn and earn with digital skills
              </p>
              <Link className="btn btn-lg bg-primary text-white" as={Link} to="/startcampaign">
              Get Started
            </Link>
            </Col>
            <Col xs="6" className="mainRight">
              <img src="learning.gif" alt="learning" width="100%" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="our-types">
        <Container>
          <h2>How It Works</h2>
          <Row style={{ marginLeft: "0px !important", marginRight: "0px" }}>
            <Col xs="4">
              <Card
                style={{ width: "24rem" }}
                className="shadow p-3 mb-5 bg-body rounded type-card"
              >
                <Card.Body>
                  <Card.Title
                    className="type-card__title"
                    style={{ display: "flex" }}
                  >
                    <i className="fa fa-check-circle"></i> Step 1
                  </Card.Title>
                  <Card.Text>Create Campaign</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{ width: "24rem" }}
                className="shadow p-3 mb-5 bg-body rounded type-card"
              >
                <Card.Body>
                  <Card.Title
                    className="type-card__title"
                    style={{ display: "flex" }}
                  >
                    <i className="fa fa-info-circle"></i> Step 2
                  </Card.Title>
                  <Card.Text>Add neccessary information</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{ width: "24rem" }}
                className="shadow p-3 mb-5 bg-body rounded type-card"
              >
                <Card.Body>
                  <Card.Title
                    className="type-card__title"
                    style={{ display: "flex" }}
                  >
                    <i className="fa fa-share"></i> Step 3
                  </Card.Title>
                  <Card.Text>post and share campain</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-types-future">
        <Container>
          <h2>Active Campaigns</h2>
          <Row style={{ marginLeft: "0px !important", marginRight: "0px" }}>
            <ProjectCards />
            <button
              id="loadMoreBtn"
              onClick={() => getNextProjects()}
              className="btn btn-primary"
            >
              Load More
            </button>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Home;
