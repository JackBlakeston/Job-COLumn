const {expect} = require('chai');
const path = require('path');
/* const {app} = require('../index');
const request = require('supertest') */
const controller = require('../controllers')

describe('controller', () => {
  let req = {}
  const res = {
    send: function(data){
      this.data = data;
      return this;
    },
    status: function(s) {
        this.statusCode = s;
        return this;
    }
};

   it('it should return an array of job objects', async ()=>{
      await controller.getAllJobs(req, res);
      expect(res.statusCode).to.eql(200);
      expect(res.data).to.be.an('array');
      expect(res.data).to.have.lengthOf.above(1000);
      let testArr = res.data.slice(10);
      for(let job of testArr){
        expect(job.dataValues.hasOwnProperty('applications') && job.dataValues.hasOwnProperty('jobDescription')).to.be.true;
      }
  })
})