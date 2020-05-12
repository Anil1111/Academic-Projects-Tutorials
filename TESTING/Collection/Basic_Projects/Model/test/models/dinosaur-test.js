const Dinosaur = require('../../models/dinosaur');
const { connectAndDrop, disconnect } = require('../../database');
const { assert } = require('chai');

describe('Dinosaur', () => {
  beforeEach(connectAndDrop);
  afterEach(disconnect);
  // afterEach(async () => {
  //   await mongoose.disconnect();
  // });

  describe('#name', () => {
    it('is a String', () => {
      const dino = new Dinosaur({
        name: 'T-rex'
      });

      assert.strictEqual(dino.name, 'T-rex');
    });

    it('is Required', () => {
      const dino = new Dinosaur();
      const error = dino.validateSync();

      assert.equal(error.errors.name.message, 'Path `name` is required.');
      assert.equal(error.errors.name.kind, 'required');
    });
  });

  describe('#count', () => {
    it('is invalid with 11', () => {
      const dino = new Dinosaur({
        name: 'Rock', count: 11, risk: 'high'
      });
      const error = dino.validateSync();

      assert.ok(dino.errors, 'model should have validation error');
      assert.strictEqual(dino.errors.count.message, 'Cannot hold more than 10 dinosaurs.');
    });

    it('is valid with 10', () => {
      const dino = new Dinosaur({
        name: 'Triceratops',
        count: 10,
        risk: 'Low'
      });

      dino.validateSync();
      assert.isUndefined(dino.errors, 'model should be valid');
    });
  });

  describe('#risk', () => {
    it('is a string', () => {
      const dino = new Dinosaur({
        name: 'Mountain', count: 2, risk: 'low'
      });
      const expected = 'low';

      assert.strictEqual(dino.risk, expected);

    })
  });


  describe('#save', () => {
    it('persists a dino', async () => {
      const fields = {
        name: 'Velociraptor',
        count: 3,
        risk: 'High'
      };
      const dino = new Dinosaur(fields);

      await dino.save();
      const stored = await Dinosaur.find({ 'name': 'Velociraptor' });
      assert.strictEqual(stored.length, 1);
      assert.include(stored[0], fields);

    });
  });

  describe('.findByName', () => {
    it('returns the first match on name', async () => {
      const fields = {
        name: 'Pterodactyl',
        count: 5,
        risk: 'Low'
      };
      const dino = new Dinosaur(fields);
      await dino.save();

      const stored = await Dinosaur.findByName('Pterodactyl');

      assert.include(stored, fields);
    });
  });

  describe('#breed', () => {
    it('increases count by 1', () => {
      const start = 3;
      const end = 4;
      const dino = new Dinosaur({
        name: 'Stegosaurus',
        count: start,
        risk: 'Low'
      });

      dino.breed();
      assert.equal(dino.count, end);
    });
  });

});